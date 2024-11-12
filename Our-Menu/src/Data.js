const Data =[
    {
        id :1,
        image:"https://s3-alpha-sig.figma.com/img/e3df/6ea9/3627b8136f915b157929135623922602?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KD0Nkj~nRhJ4Xa2T8MsLYz1kKkh8gdKMNOTm0DQemgQVNaTjHV3KlGUQ0mnNGTDB9eOLWH6XvzR1uqQUGUt2r9u7OJfbyID~udN6jH0lRDyAnCoHLPxXZV7N5jOUH~bZGKH7-bKH3bDHmdMdUKarHqopRgAOzm34gLp5IzCoWf6IgUi7~pOK6ByUx8kPXmyBApewxmI9edHlEI5cCUqyR9GE3GTjCVJTTOEBIGenCJkLPZJzT60dDNK7HjkktjEPYaeu7I1Y3tLMvsQIsN4jTdAXXL4e8teNv71Qg-T~pm6lfYV-OEAdx9wDfyuQ6X6V8XODofCGKBi1aVJpeCCw4g__",
        title:"buttermilk pancakes" ,
        price:"$15.99",
        discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id :2,
        image:"https://s3-alpha-sig.figma.com/img/60d8/b8a4/e975407fa5133378436c6eaa4ff7ffca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXCWDPOAEag04kIM2vFkpLQsxwFh0klr1LrVhRU7hehXvYeacSLEI7nJWkWCpT1TXMcfa-GAulFNuuuXWWGbTn-RtdTjCCQXCDctd9LMTge5znzxvVG8aMRkyVY1L5JJt3Hwy3jAUD28zw6UO5Ud-65cFmJWZSGCdmhuxiidnEYzMrEG40g73tYwG0T7HidjYEqgGBDE~F-OU5rVYXIQ3KUcz2Fc4pBuHkEew-BD6pULvqJgJTDd3TeT6JxREd5Ecj83SquIM6iGngFJXCrHQ4FtxsGSgAhTGcX7zjD2CO-d55HEEt~F80lbrG47nAzINwcRMk9RDsMm0zcDOfzWgA__",
        title:"diner double" ,
        price:"$13.99",
        discription:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id :3,
        image:"https://s3-alpha-sig.figma.com/img/6e2e/cf9f/628e013bf55a6a8d5e6ecce9393d23a6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bW3~Stey42xf~1ajl-lkSSrSEdKYim~SfVk2ALZUmkLrR1VBseX2KyFzxpxhWXSNlFekqoGjLWGl5FlbDr3sxvy0DNx3Rdykl4ZpQDeQzZf1leAY5Afp4NErUe6ogQDT9RqX1paqsCX3hCPpS1Xj1GDBznDvAgd3QntBNZAjClRS5TbZYeZG77S88afxSkhLhe0joqLup4XV~LPPzXxmFK~DvwaFW87KjVhYbg1ETBml3Gxt5mB6zCBhixcMpWS8SeMUcV25TsjigVo2KgorEKP0a9EN3tB~w~-7QXrX7sliR4hVC9zWZo8--6ISsClWhR6aNYCee20EHr4mAzFmiQ__",
        title:"godzilla milkshake" ,
        price:"$6.99",
        discription:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id :4,
        image:"https://s3-alpha-sig.figma.com/img/01d9/b8f5/7be5b9eb34f558cdf7581ae19c3308fb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mh8t3~ro~pJpXh0CYpeyFz2YZL9uZ~SiX35FEHE5gKKbw4Lf9ruyaLIwl8ue3kOyCjh9BaG~SBRnfCVsfA1TvaAYou~VzoZaIdgOCAQr-ljtX9DS-ULST18wgwcL1a7N9Ll6HdwpaRJ5zrDN4aHWguMS-73g8q5fDXFgBR76b9Pr6IY~TbVCsWcKnXzC-kDBVehCgSuZOUSQZc2FzOxySJ0JvGAIuvqfdPrBOh9gc54uYjjwYdwskVeoWAo90Z6XhqPNl~-l0VhGwi78jRXIv9DJB4qeKDNoYkmXc0yh~b5MnmxWVwmx9a90P3uFqYIMCfJLOkq9RwUZWHkuS2GtkA__",
        title:"country delight",
        price:"$20.99",
        discription:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        id :5,
        image:"https://s3-alpha-sig.figma.com/img/e022/23f9/850976a9c939be4834c8470bed68f2a4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUCY1~taCA4TX9l4KHKneqkMht6gbavwHAoO7Yy87WBfBTNVJkyRkNAmK1dsq8oRF02XrMQcdRHXCjDRw0BNQmrNMtxwlnISjJC2H2fqRlQQNuWBiiukJWIYT5DHdGJYcc4qMMuscReWaTwvue2uw9X0HyJG0jzXbtRMC9eqhUNQu~x3GYap84jLrWJaSqfhaNm4IzaiY8aD3gic6sgQ8rP~ZFzQghxPv9F1MtaaQe~bvppVdS1s-mLpXQ5iUD4bLGOb43hqFEnFC7qcNQXZtQYUxMUsoHblmARwUWBgLyVjsjeZSuSl9dTibX5at~xaaE8GeilIvb7s67j38Nywcg__",
        title:"egg attack" ,
        price:"$22.99",
        discription:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        id :6,
        image:"https://s3-alpha-sig.figma.com/img/e1c9/1915/0d76bd5f29de711610de215341d587b3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABbQhzdQI2fg8CpuhDM9jMRtYc5XKvVMVe6L~lXXLPz6bg9Y11WvEQs89ZVmQlE3GRUDeoqrL16pKDiEphBTQ6RvFBM0CS162mT33FBnnYgCsVkNhmicP~vzCIBBkfB8LcKuZyw1IOM3ncH52O4SrPO6oaozDX6vFroSYkbcKJxw7gR0kVLN-DStG-RujrP4BCyul7dFXOg5pxpFajZ5W-jZr4jbOdCBmiY1qCGWe7ATkXEhQoknI07xA9KpUtn5NhyJHvDqizOs47XVpUo534UQivxRbK2uCejJ3ceYUxqgLTv5lworrdksgRjWRKGRzdyHu419tBo3hCPid3fumQ__",
        title:"oreo dream",
        price:"$18.99",
        discription:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        id :7,
        image:"https://s3-alpha-sig.figma.com/img/86bb/5faf/6ea0d33f72d0a0626265e6928d8fe42d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2Rh23~WxPkiXUMNkiIn7GZuEJtoOjitzCqs7Q7FnhNN8UkQ8Yy55hUhyArALGjLjBxi0J64jRxs2PWN3o060BcX9Bw40AVqyVlWqbQBNjBE9sFRAujNzHoQ1FnHvPkgIBiWGfpAqI3jnaLLOS0TQLT-xc79VmrxJh3n2YAKGfff4gL9i0djWUKs3sbMIQxgx8k89AJsf30dHcj0AKIY9eryovpWmykGYw54w3XqaNjavV6I~C20WSRf4ZtAB9FrnoEvzcjrqoiDaNZuW4WzKzZfwPlsDZGvJfpqlpj-NeDjBVBq0riyDc-LtVsEmiHfBZ0-LGM6GZpmWVWtEytd0Q__",
        title: "bacon overflow",
        price:"$8.99",
        discription:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        id :8,
        image:"https://s3-alpha-sig.figma.com/img/2732/43a3/7fb25da9c5e073629613abe19c846f87?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YluKBapbQAiHz9bwR5e8mCG1U3VpjIo0ScA1NtXwfq2niB0XHeoBGkdOTQM-slMr3-yNpa3Cjls2yUAFtktDXb-RwaWN2N~ISa7H1~64RiM9iPN8J1-gDVdanADneOBmTZUvuhgCGXrzUg8h60iqkxDn9MnRbJ~G5DDcIb11UmHKich-cJxxdqI2BoZn7KmcdpaKuTcHvK6Gwy-jzq4RpwJoFMqCJjKcZD1ADpDXO6KK8Q1C5~peN5POutQpVB-xL~RkRqOacmYdexbO5M64hnmsW17JMxCZ0BD-RtR6~PhtKrHl4f9gd5OijhM7TIplC-Y1OZMlMLrgdWuyx-dwQA__",
        title:"american classic" ,
        price:"$12.99",
        discription:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id :9,
        image:"https://s3-alpha-sig.figma.com/img/a003/3098/62d84d9945fdd5fc68f2f9826ba9cd7f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I4Jutn5WxjJrZ-1dvHyJsAyTbpugcv09ub2N8OE6FZW~1pUC1HBgCy2tJ69jur7FEyhvR7mce-pTd9XMWDA5ihtAztM7x6IbnpujHyAjHnSdgMbn7zAgGzEpJiSNVpHwusQjpl2Rve7nTTJJDwgO9VVnllXIf3Yhdi7N0ZbR~mzwGDULtwGFRP16xMBDDrIC7nzcbLisyDBRmpUjU2A9adg1OpjeH3LQev5gkdzr26g9aQFMsbwNQi4ASsv3HljCERZBCnwMdtWkjzHCExd9QX05KCxKxSlQouQ7bCWHpXo1av743Jw3BifUfGpnQORw~tUdfV2hvvWGvIV08exx2w__",
        title: "quarantine buddy",
        price:"$12.99",
        discription:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
]
export {Data}
