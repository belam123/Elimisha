class AddAccessTokensToAdmins < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :access_tokens, :string
  end
end
