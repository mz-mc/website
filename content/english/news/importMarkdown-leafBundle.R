library(readr)
library(dplyr)
library(yaml)
library(here)
library(stringr)
library(urltools)
library(rlist)

# set working directory
setwd(here("content/english/news/"))

# read drupal data export into dataframe
import_data <- read_csv("news-export.csv") %>%
  as_tibble()
import_data[is.na(import_data)] = ""

# loop through rows creating index.md for each item
for (row in 1:nrow(import_data)) {
  # set directory based on slug
  dir_path <- paste(here("content/english/"),import_data[row,]$slug,sep = "")
  # set file path
  file_path <- paste(dir_path,"/index.md",sep = "")
  # convert image field to list
  img_urls <- str_split(import_data[row,]$image, ", ")
  # decode image urls
  for (item in 1:length(img_urls[[1]])) {
    img_urls[[1]][item] = url_decode(basename(img_urls[[1]][item]))
  }
  # replace image with first element of img_urls
  import_data[row,]$image <- img_urls[[1]][1]
  # create new column containing remaining elements of img_urls
  #import_data <- mutate(import_data, images = paste("[", toString(img_urls[[1]]), "]", sep=""))
  import_data <- mutate(import_data, images = as.yaml(img_urls[[1]]))
  #import_data[row,]$images <- noquote(paste('[',import_data[row,]$images,']', sep = ""))
  #import_data[row,]$images <- str_replace_all(import_data[row,]$images, "\'", "")
  #import_data[row,]$images <- print(import_data[row,]$images, quote = F)
  #import_data <- mutate(import_data, images = img_urls[[1]])
  # convert image list back to char and add []
  #img_urls <- paste("[", unlist(img_urls), "]")
  #import_data[row,]$image <- img_urls
  
  # convert fields to yaml frontmatter
  fm <- select(import_data[row,],-body, -images, -tags) %>%
    as.yaml()
  images <- select(import_data[row,],images) %>%
    as.yaml()
  # get body
  content <- select(import_data[row,], body) %>%
    as.character()
  # write to file
  write("---", file_path)
  write(fm, file_path, append = T)
  #write(images, file_path, append = T)
  #write("images:", file_path, append = T)
  #write(import_data[row,]$images, file_path, append = T)
  write("---", file_path, append = T)
  write(content, file_path, append = T)
}


#%>%
# make image array by adding [] to image column
#mutate(image = paste("[", image, "]", sep = ""))

# replace all double spaces with single space
#import_data$description <- str_replace_all(import_data$description, "  ", " ")
#import_data$body <- str_replace_all(import_data$body, "  ", " ")
