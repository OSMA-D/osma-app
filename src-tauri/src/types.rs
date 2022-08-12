use serde::Deserialize;

#[derive(Deserialize, Clone)]
pub struct AppData {
    pub jwt: String,
    pub lng: String,
}

pub struct Language {
    pub lng: String,
}
