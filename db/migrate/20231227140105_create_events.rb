class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :due_date
      t.string :message
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
