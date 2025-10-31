package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func HealthHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"status":"ok"})
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    // placeholder - implement user creation, bcrypt hashing, DB insert
    w.WriteHeader(http.StatusCreated)
    fmt.Fprintln(w, `{"message":"register endpoint (stub)"}`)
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
    // placeholder - implement session / JWT
    w.WriteHeader(http.StatusOK)
    fmt.Fprintln(w, `{"message":"login endpoint (stub)"}`)
}

func CreateStoreHandler(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusCreated)
    fmt.Fprintln(w, `{"message":"store created (stub)"}`)
}

func CreateProductHandler(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusCreated)
    fmt.Fprintln(w, `{"message":"product created (stub)"}`)
}

func CreateCheckoutSessionHandler(w http.ResponseWriter, r *http.Request) {
    // Here you'd call Stripe API to create a Checkout Session.
    w.WriteHeader(http.StatusOK)
    fmt.Fprintln(w, `{"checkoutUrl":"https://checkout.stripe.mock/session_id"}`)
}

func StripeWebhookHandler(w http.ResponseWriter, r *http.Request) {
    // verify signature using STRIPE_WEBHOOK_SECRET, then update subscription status
    w.WriteHeader(http.StatusOK)
    fmt.Fprintln(w, `{"message":"webhook received (stub)"}`)
}
