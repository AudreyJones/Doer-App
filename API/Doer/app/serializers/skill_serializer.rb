class SkillSerializer < ActiveModel::Serializer
    attributes :id, :name, :equipment
    has_many :categories
  end