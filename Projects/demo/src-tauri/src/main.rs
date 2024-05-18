// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod util;
use std::sync::mpsc;

use tauri_plugin_dialog::DialogExt;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(app: tauri::AppHandle, name: &str) -> String {
    let (tx, rx) = mpsc::channel();

    app.dialog()
        .file()
        .pick_file(move |file_path| match file_path {
            Some(file_path) => {
                let _ = tx.send(file_path.path);
            }
            None => println!("Canceled"),
        });

    let path = rx.recv().unwrap();

    let json = util::read_csv_to_json(path.to_str().unwrap()).unwrap();

    json
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
