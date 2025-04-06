# app/controllers/api/v1/users_controller.rb
class Api::V1::UsersController < ApplicationController
  # Oauth認証後のユーザー作成処理
  def create
    provider = params[:provider]
    uid = params[:uid]
    name = params[:name]
    email = params[:email]
    
    # ユーザーがすでに存在する場合は更新、存在しない場合は新規作成
    user = User.find_or_create_by(email: email) do |u|
      u.name = name
      u.uid = uid
      u.provider = provider
    end

    render json: { message: 'User created successfully', user: user }, status: :created
  rescue => e
    render json: { error: 'Failed to create user', message: e.message }, status: :unprocessable_entity
  end

  def destroy
    user = User.find_by(email: params[:email])
    if user
      user.destroy
    else
      render json: { error: "ユーザーが見つかりませんでした" }, status: :not_found
    end
  rescue StandardError => e
    render json: { error: e.message }, status: :internal_server_error
  end

end
