class CreateFees < ActiveRecord::Migration[7.0]
  def change
    create_table :fees do |t|
      t.integer :amount
      t.string :due_date
      t.string :payment_status
      t.references :student, null: false, foreign_key: true
      t.timestamps
    end
  end
end
