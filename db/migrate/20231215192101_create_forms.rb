class CreateForms < ActiveRecord::Migration[7.0]
  def change
    create_table :forms do |t|
      t.integer :class_number
      t.string :stream

      t.timestamps
    end
  end
end
