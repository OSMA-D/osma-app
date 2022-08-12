use std::sync::Mutex;

use crate::{AppData, Language};
use reqwest::blocking::*;
use tauri::{App, State};

#[tauri::command]
pub fn check_auth(state: State<AppData>) -> bool {
    println!("Checking auth");

    if state.jwt == "null" {
        return false;
    } else {
        let client = Client::new();
        let response = client
            .get("https://osma-server.herokuapp.com/api/personal_library")
            .bearer_auth(&state.jwt)
            .send();
        match response {
            Ok(response) => {
                if response.status().is_success() {
                    true
                } else {
                    false
                }
            }
            Err(_) => false,
        }
    }
}

#[tauri::command]
pub fn change_lng(state: State<Mutex<Language>>, lng: String) {
    let mut state = state.lock().unwrap();
    *state = Language { lng };
}

#[tauri::command]
pub fn get_lng(state: State<Mutex<Language>>) -> String {
    match state.lock() {
        Ok(val) => val.lng.clone(),
        Err(_) => "ru".to_string(),
    }
}
