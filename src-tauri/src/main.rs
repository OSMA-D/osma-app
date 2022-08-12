#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::{fs, sync::Mutex};

mod types;
use types::*;

mod commands;
fn main() {
    let options = {
        let op = fs::read_to_string("options.json").unwrap_or("{\"jwt\":null}".to_string());
        serde_json::from_str::<AppData>(&op).unwrap_or(AppData {
            jwt: "null".to_string(),
            lng: "en".to_string(),
        })
    };
    tauri::Builder::default()
        .manage(Mutex::new(Language {
            lng: options.lng.clone(),
        }))
        .manage(options)
        .invoke_handler(tauri::generate_handler![
            commands::check_auth,
            commands::change_lng,
            commands::get_lng
        ])
        .run(tauri::generate_context!())
        .expect("error while running osma app");
}
