class AdminSerializer < ActiveModel::Serializer
  attributes :id, :email,:access_tokens
end
