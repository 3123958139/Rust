use polars::prelude::*;
use serde::{Deserialize, Serialize};
use serde_json::{Result, Value};
use std::fs::File;

#[derive(Serialize, Deserialize, Debug)]
struct Vecs {
    names: Vec<String>,
    rows: Vec<Vec<String>>,
}

pub fn read_csv_to_json(file_path: &str) -> Result<String> {
    let df = CsvReader::new(File::open(file_path).unwrap())
        .infer_schema(None)
        .has_header(true)
        .finish()
        .unwrap(); // 读取CSV文件

    let column_names = df
        .get_column_names()
        .iter()
        .map(|name| name.to_string())
        .collect();

    let data: Vec<Vec<_>> = df
        .get_columns()
        .iter()
        .map(|c| c.iter().map(|v| v.to_string()).collect::<Vec<_>>())
        .collect();

    let vecs = Vecs {
        names: column_names,
        rows: data,
    };

    let json = serde_json::to_string(&vecs).unwrap();
    
    Ok(json)
}
