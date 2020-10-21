from selenium import webdriver
import requests
import json
import pdb
import argparse
import re
regex_n = re.compile(r"((\\n)|\s){1,5}")
parser = argparse.ArgumentParser(
        description='Currently being used to parse chromedriver path and website url.')
parser.add_argument(
     '--chromedriver_path', '-c', dest='chromedriver_path',
     default = '/chromedriver.exe',
     help = 'the path to your chromedriver')
parser.add_argument(
    '--website_url', '-w', dest='website_url',
    default='https://manotomo.tk',
    help='the website that this test will use, do not include a slash at the end, for example https://manotomo.tk is good, but https://manotomo.tk/ or https://manotomo.tk/api/messages is bad.'
)
args = parser.parse_args()
driver = webdriver.Chrome(args.chromedriver_path)
#driver = webdriver.Chrome("/users/jesse/chromedriver")
driver.implicitly_wait(5)
driver.get(args.website_url)
#driver.get("https://manotomo.tk")
api = requests.get(args.website_url + "/api/messages")
#api = requests.get("https://manotomo.tk/api/messages")
api_json = api.json()
print(json.dumps(api_json, sort_keys=True, ensure_ascii=True, indent=4))
driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
msg_card_head = '//div[@id="root"]/main/div[2]/div[2]/div[5]/div/div['
msg_card_tail = ']/div[1]/div[@class="message-card-text active-message"]/div'
flag_head = '//*[@id="root"]/main/div[2]/div[2]/div[5]/div/div['
flag_tail = ']/div[2]/span/img'
native_message_list = []
jp_message_list = []
flag_list = []
DOM_list = []
for message in api_json["messages"]:
    #pdb.set_trace()
    native_msg_xpath = "{}{}{}".format(
        msg_card_head,
        api_json["messages"].index(message) + 1,
        msg_card_tail)
    driver.execute_script("arguments[0].scrollIntoView();", driver.find_element_by_xpath(native_msg_xpath))
    while True:
        if driver.find_element_by_xpath(native_msg_xpath).is_displayed():
            native_message_list.append(driver.find_element_by_xpath(native_msg_xpath).text)
            #print(repr(driver.find_element_by_xpath(native_msg_xpath).text))
            break
        else:
            pass
driver.find_element_by_xpath('//*[@id="root"]/main/header/div[2]/button').click()
for message in api_json["messages"]:
    #pdb.set_trace()
    jp_msg_xpath = "{}{}{}".format(
        msg_card_head,
        api_json["messages"].index(message) + 1,
        msg_card_tail)
    flag_xpath = "{}{}{}".format(
        flag_head,
        api_json["messages"].index(message) + 1,
        flag_tail
    )
    if api_json["messages"][api_json["messages"].index(message)]["tl_msg"] == "":
        jp_message_list.append("")
    else:
        driver.execute_script("arguments[0].scrollIntoView();", driver.find_element_by_xpath(jp_msg_xpath))
        while True:
            if driver.find_element_by_xpath(jp_msg_xpath).is_displayed():
               jp_message_list.append(driver.find_element_by_xpath(jp_msg_xpath).text)
               #print(repr(driver.find_element_by_xpath(jp_msg_xpath).text))
               break
            else:
                pass
    if api_json["messages"][api_json["messages"].index(message)]["country"] == "":
        flag_list.append("")
    else:
        driver.execute_script("arguments[0].scrollIntoView();", driver.find_element_by_xpath(flag_xpath))
        while True:
            if driver.find_element_by_xpath(flag_xpath).is_displayed():
                flag_list.append("".join(map(lambda x: chr(ord(x) - 0x1F1A5), driver.find_element_by_xpath(flag_xpath).get_attribute("alt"))))
                break
            else:
                pass
    driver.execute_script("arguments[0].scrollIntoView();", driver.find_element_by_xpath(jp_msg_xpath))
    DOM_list.append({"country": str(flag_list[api_json["messages"].index(message)]),
                     "orig_msg": str(native_message_list[api_json["messages"].index(message)]),
                     "tl_msg": str(jp_message_list[api_json["messages"].index(message)]),
                     "username": str(driver.find_elements_by_class_name("message-card-footer")[api_json["messages"].index(message)].text)})
def unescape(in_str):
    """Unicode-unescape string with only some characters escaped."""
    #ideographic space skip, it doesn't work for some reason :(
    in_str = in_str.replace('\\u3000', " ")
    in_str = regex_n.sub(" ", in_str)
    in_str = in_str.encode('unicode-escape')   # bytes with all chars escaped (the original escapes have the backslash escaped)
    in_str = in_str.replace(b'\\\\u', b'\\u')  # unescape the \
    in_str = in_str.decode('unicode-escape')   # unescape unicode
    in_str = in_str.rstrip()
    return in_str
#print(DOM_list)
for message in api_json["messages"]:
    if api_json["messages"][api_json["messages"].index(message)]["country"] == DOM_list[api_json["messages"].index(message)]["country"]:
        pass
    else:
        print(F'ALERT: ON ENTRY {api_json["messages"].index(message) + 1} THE COUNTRY HAS A MISMATCH')
    if unescape(api_json["messages"][api_json["messages"].index(message)]["orig_msg"]) == DOM_list[api_json["messages"].index(message)]["orig_msg"]:
        pass
    else:
        print(F'ALERT: ON ENTRY {api_json["messages"].index(message) + 1} THE NATIVE MESSAGE HAS A MISMATCH')
    if unescape(api_json["messages"][api_json["messages"].index(message)]["tl_msg"]) == DOM_list[api_json["messages"].index(message)]["tl_msg"]:
        pass
    else:
        print(F'ALERT: ON ENTRY {api_json["messages"].index(message) + 1} THE TRANSLATED MESSAGE HAS A MISMATCH')
    if unescape(api_json["messages"][api_json["messages"].index(message)]["username"]) == DOM_list[api_json["messages"].index(message)]["username"]:
        pass
    else:
        print(F'ALERT: ON ENTRY {api_json["messages"].index(message) + 1} THE USERNAME HAS A MISMATCH')