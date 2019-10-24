class CategorySerializer < ActiveModel::Serializer
    attributes :id, :name, :have, :experience
    belongs_to :skill
    
  end