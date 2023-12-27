class CreateSupports < ActiveRecord::Migration[7.0]
  def change
    create_table :supports do |t|
      t.string :email
      t.string :topic
      t.string :subject
      t.text :message
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
