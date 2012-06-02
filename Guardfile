# A sample Guardfile
# More info at https://github.com/guard/guard#readme

group :frontend do

  guard 'less' do
    watch(%r{^.+\.less$})
  end
  
  guard 'livereload' do
    watch(%r{^.+\.html$})
    watch(%r{^public/.+\.(css|js|less)})
  end

end

