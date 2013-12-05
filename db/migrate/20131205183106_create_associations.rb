class CreateAssociations < ActiveRecord::Migration
  def change
    create_table :associations do |t|
      t.belongs_to :duck, index: true
      t.belongs_to :gift, index: true
      t.integer :value

      t.timestamps
    end
  end
end
