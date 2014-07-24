Curaduria::Application.routes.draw do
  
  resources :data, :users, :sessions

  root 'home#index'
  get 'normatividad' => 'home#normatividad'
  get 'servicios'    => 'home#servicios'
  get 'misionv'     => 'home#misionv'
  get 'nuestrasede'  => 'home#nuestrasede'
  get 'contacto'   => 'home#contacto'
  get 'liquidacion_de_expensas' => 'liq_expensas#index'
  get 'cargo_fijo_uso_residencial' => 'liq_expensas#cf_ur'
  get 'cargo_variable_uso_residencial' => 'liq_expensas#cv_ur'
  get 'cargo_fijo_otros_usos' => 'liq_expensas#cf_ou'
  get 'cargo_variable_otros_usos' => 'liq_expensas#cv_ou'
  get "log_in" => "sessions#new", :as => "log_in"
  get "log_out" => "sessions#destroy", :as => "log_out"
  get "sign_up" => "users#new", :as => "sign_up"
  get "adm_board" => "data#index", :as => "adm_board"
  get "decreto_1469" => "pdfs#decreto_1469", :as => "decreto_1469"
  get "decreto_4397" => "pdfs#decreto_4397", :as => "decreto_4397"
  get "ley_388" => "pdfs#ley_388", :as => "ley_388"
  get "estatuto_urbano" => "pdfs#estatuto_urbano", :as => "estatuto_urbano"


end
