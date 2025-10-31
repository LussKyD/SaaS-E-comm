package main

import (
    "log"
    "net/http"
    "os"

    "github.com/gorilla/mux"
    "github.com/joho/godotenv"
)

func main() {
    godotenv.Load()

    r := mux.NewRouter()
    api := r.PathPrefix("/api").Subrouter()

    api.HandleFunc("/health", HealthHandler).Methods("GET")
    api.HandleFunc("/auth/register", RegisterHandler).Methods("POST")
    api.HandleFunc("/auth/login", LoginHandler).Methods("POST")
    api.HandleFunc("/stores", CreateStoreHandler).Methods("POST")
    api.HandleFunc("/stores/{id}/products", CreateProductHandler).Methods("POST")
    api.HandleFunc("/billing/create-checkout-session", CreateCheckoutSessionHandler).Methods("POST")
    api.HandleFunc("/billing/webhook", StripeWebhookHandler).Methods("POST")

    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    log.Println("Draco SaaS backend running on :" + port)
    log.Fatal(http.ListenAndServe(":"+port, r))
}
