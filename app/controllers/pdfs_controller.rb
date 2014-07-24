class PdfsController < ApplicationController

	def decreto_1469
		path=Rails.root.join('public','Decreto_1469_de_2010.pdf')
	  send_file(path, :type => 'application/pdf', :disposition => 'inline')
	end

	def decreto_4397
		path=Rails.root.join('public','Decreto_4397_de_2006.pdf')
	  send_file(path, :type => 'application/pdf', :disposition => 'inline')
	end

	def ley_388
		path=Rails.root.join('public','Ley_388_de_1997.pdf')
	  send_file(path, :type => 'application/pdf', :disposition => 'inline')
	end

	def estatuto_urbano
		path=Rails.root.join('public','Estatuto_Urbano_de_Soledad.pdf')
	  send_file(path, :type => 'application/pdf', :disposition => 'inline')
	end
end
