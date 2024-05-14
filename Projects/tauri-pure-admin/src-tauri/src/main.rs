#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, Submenu};

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .menu(
            Menu::new()
            .add_submenu(Submenu::new(
                "文件",
                Menu::new()
                    .add_item(CustomMenuItem::new("close", "退出").accelerator("cmdOrControl+Q")),
            ))
            .add_submenu(Submenu::new(
                "帮助",
                Menu::new()
                    .add_item(CustomMenuItem::new("about", "关于").accelerator("cmdOrControl+A")),
            )),
        )
        .on_menu_event(|event| match event.menu_item_id() {
            "close" => {
                event.window().close().unwrap();
            }
            _ => {}
        })
        .run(context)
        .expect("error while running tauri application");
}