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
            .get("https://osma-server.herokuapp.com/personal_library")
            .bearer_auth(&state.jwt)
            .send();
        match response {
            Ok(_) => true,
            Err(_) => false,
        }
    }
}
