use crate::AppData;
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
