def double_char(str):
  """
  Given a string, return a string where for every char in the original, 
  there are two chars. 
  """
  #new_str = "".join([i+j for i,j in zip(list(str),list(str))])
  new_str = ""
  for char in str:
    new_str += char*2
  return 