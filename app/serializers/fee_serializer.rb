class FeeSerializer < ActiveModel::Serializer
  attributes :id,:amount,:due_date,:payment_status

end
