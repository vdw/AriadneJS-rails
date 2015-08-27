class CreateAriadnesThreads < ActiveRecord::Migration
  def change
    create_table :ariadnes_threads do |t|
       t.integer :user_id
       t.string  :browser
       t.string  :window
       t.text    :thread
       t.string  :event
       t.string  :element
       t.timestamps
    end
  end
end
