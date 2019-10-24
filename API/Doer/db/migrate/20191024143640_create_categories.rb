class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :skill_id
      t.string  :name
      t.boolean :haver
      t.integer :experience

      t.timestamps
    end
  end
end
