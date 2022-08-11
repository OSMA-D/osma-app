#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;

mod types;
use types::*;

mod commands;
fn main() {
    let options = fs::read_to_string("options.json").unwrap_or("{\"jwt\":null}".to_string());
    tauri::Builder::default()
        .manage(
            serde_json::from_str::<AppData>(&options).unwrap_or(AppData {
                jwt: "null".to_string(),
            }),
        )
        .invoke_handler(tauri::generate_handler![commands::check_auth])
        .run(tauri::generate_context!())
        .expect("error while running osma app");
}
