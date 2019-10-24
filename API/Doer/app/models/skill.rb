class Skill < ApplicationRecord
    serialize :categories, Array
    has_many :categories


    
end
