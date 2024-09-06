ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

.PHONY: setup
setup:
	mkdir -p $(ROOT_DIR)/public
	wget https://courses.missouristate.edu/KenVollmar/MARS/MARS_4_5_Aug2014/Mars4_5.jar -O $(ROOT_DIR)/public/Mars.jar
