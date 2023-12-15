class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :second_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.integer :form_id

      t.timestamps
    end
  end
end
