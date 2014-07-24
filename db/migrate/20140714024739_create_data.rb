class CreateData < ActiveRecord::Migration
  def change
    create_table :data do |t|
      t.string :definicion
      t.string :anio
      t.string :siglas
      t.float :valor

      t.timestamps
    end
  end
end
