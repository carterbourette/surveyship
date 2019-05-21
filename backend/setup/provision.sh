sudo apt-get -y update

# Install git
apt-get install git -y > /dev/null

sudo add-apt-repository ppa:ondrej/php
sudo apt-get -y update

# Install plcDataLogIt
apt-get install git -y > /dev/null

# Installing Apache
sudo apt-get -y install apache2

# Installing MySQL and it's dependencies, Also, setting up root password for MySQL as it will prompt to enter the password during installation
sudo debconf-set-selections <<< 'mysql-server-5.7 mysql-server/root_password password sys'
sudo debconf-set-selections <<< 'mysql-server-5.7 mysql-server/root_password_again password sys'
sudo apt-get -y install mysql-server libapache2-mod-auth-mysql libapache2-mod-php7.0
#
# Installing PHP and it's dependencies
sudo apt-get -y install php7.0
sudo apt-get -y install php7.0-mysqli php7.0-curl php7.0-gd php7.0-mbstring
sudo apt-get -y install python-dev python-pip -q -y

sudo phpenmod -v 7.0 mysqli
sudo phpenmod -v 7.0 mbstring
