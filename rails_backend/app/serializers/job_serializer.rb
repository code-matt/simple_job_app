class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :wage
end
