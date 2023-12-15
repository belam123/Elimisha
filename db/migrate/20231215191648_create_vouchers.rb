class CreateVouchers < ActiveRecord::Migration[7.0]
  def change
    create_table :vouchers do |t|
      t.integer :voucher_amount
      t.string :expiry_date
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
