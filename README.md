# pr0bble configuration webservice

taken from: https://wiki.uberspace.de/development:ruby
and: https://wiki.uberspace.de/cool:rails

## Deployment

### start service
source ~/.bash_profile
rake assets:precompile
svc -u ~/service/pr0bble_config

### stop service
svc -d ~/service/pr0bble_config