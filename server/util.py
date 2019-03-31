import re

def to_camel_case(snake_str):
    components = snake_str.split('_')
    # We capitalize the first letter of each component except the first one
    # with the 'title' method and join them together.
    return components[0] + ''.join(x.title() for x in components[1:])

first_cap_re = re.compile('(.)([A-Z][a-z]+)')
all_cap_re = re.compile('([a-z0-9])([A-Z])')
def to_snake_case(camel_str):
    s1 = first_cap_re.sub(r'\1_\2', camel_str)
    return all_cap_re.sub(r'\1_\2', s1).lower()

def to_camel_dict(d):
    new_d = dict()
    for k,v in d.items():
        new_k = to_camel_case(k) if type(k) is str else k
        if type(v) is dict:
            v = to_camel_dict(v)
        elif type(v) is list:
            v = [ to_camel_dict(v_) if type(v_) is dict else v_ for v_ in v]
        new_d[new_k] = v
    return new_d

def to_snake_dict(d):
    new_d= dict()
    for k,v in d.items():
        new_k = to_snake_case(k)  if type(k) is str else k
        if type(v) is dict:
            v = to_snake_dict(v)
        elif type(v) is list:
            v = [ to_snake_dict(v_) if type(v_) is dict else v_ for v_ in v]
        new_d[new_k] = v
    return new_d
