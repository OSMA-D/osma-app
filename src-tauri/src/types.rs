use serde::Deserialize;

#[derive(Deserialize)]
pub struct AppData {
    pub jwt: String,
}
