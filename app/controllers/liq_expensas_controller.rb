class LiqExpensasController < ApplicationController

def index
  @data= Datum.all 
end

def cf_ur
  @data= Datum.all 
  render :layout => false
end

def cv_ur
  @data= Datum.all 
   render :layout => false
end

def cf_ou
  @data= Datum.all 
  render :layout => false
end

def cv_ou
  @data= Datum.all 
  render :layout => false
end

end
