# RailsDoc
# @file ユーザーテーブルを作成するためのマイグレーションファイル
# @description ユーザー情報を格納するためのテーブルを作成します
# @requires ActiveRecord::Migration

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string "provider", null: false
      t.string "uid", null: false
      t.string "name", null: false
      t.string "email", null: false
      t.timestamps
    end
  end
end
