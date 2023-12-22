class VoucherSerializer < ActiveModel::Serializer
  attributes :id,:voucher_amount,:expiry_date
end
