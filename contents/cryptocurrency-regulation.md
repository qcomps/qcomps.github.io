---
title: 'How Should the United States Approach Crypto Regulations'
date: '2021-08-14'
excerpt: 'Last week was hectic for cryptocurrency communities. Language was added to a bipartisan infrastructure bill that seems to add extreme regulatory burden to crytpocurrencies.  Can we do better?'
---

Last week was hectic for cryptocurrency communities. Language was added to a bipartisan infrastructure bill that seems to add extreme regulatory burden to participants in peer to peer (p2p) cryptocurrency protocols. Let's review the language (transcription and some emphasis mine)

---

## SEC. 80603. INFORMATION REPORTING FOR BROKERS AND DIGITAL ASSETS.

#### (a) CLARIFICATION OF DEFINITION OF BROKER.— Section 6045(c)(1) of the Internal Revenue Code of 1986 is amended—

1. by striking ‘‘and’’ at the end of subparagraph (B),
2. in subparagraph (C)—
   - (A) by striking ‘‘any other person who (for a consideration)’’ and inserting ‘‘any person who (for consideration)’’, and
   - (B) by striking the period at the end and inserting ‘‘, and’’, and
3. by inserting after subparagraph (C) the following new subparagraph: ‘‘(D) `any person who (for consideration) is responsible for regularly providing any service effectuating transfers of digital assets on behalf of another person.`’’.

#### (b) REPORTING OF DIGITAL ASSETS.—

1. BROKERS.—

   - (A) TREATMENT AS SPECIFIED SECURITY.—Section 6045(g)(3)(B) of the Internal Revenue Code of 1986 is amended by striking ‘‘and’’ at the end of clause (iii), by redesignating clause (iv) as clause (v), and by inserting after clause (iii) the following new clause:
     ‘‘(iv) any digital asset, and’’
   - (B) DEFINITION OF DIGITAL ASSET.—Section 6045(g)(3) of such Code is amended by adding at the end the following new subparagraph: ‘‘(D) DIGITAL ASSET.—Except as otherwise provided by the Secretary, `the term ‘digital asset’ means any digital representation of value which is recorded on a cryptographically secured distributed ledger or any similar technology` as specified by the Secretary.’’.
   - (C) APPLICABLE DATE.—Section 6045(g)(3)(C) of such Code is amended—
     - (i) in clause (ii), by striking ‘‘and’’ at the end,
     - (ii) by redesignating clause (iii) as clause (iv), and
     - (iii) by inserting after clause (ii) the following: ‘‘(iii) January 1, 2023, in the case of any specified security which is a digital asset, and’’.

2. FURNISHING OF INFORMATION.—

   - (A) IN GENERAL.—Section 6045A of such Code is amended—
     - (i) in subsection (a), by striking ‘‘a security which is’’, and
     - (ii) by adding at the end the following: `‘‘(d) RETURN REQUIREMENT FOR CERTAIN TRANSFERS OF DIGITAL ASSETS NOT OTHERWISE SUBJECT TO REPORTING.—Any broker, with respect to any transfer (which is not part of a sale or exchange executed by such broker) during a calendar year of a covered security which is a digital asset from an account maintained by such broker to an account which is not maintained by, or an address not associated with, a person that such broker knows or has reason to know is also a broker, shall make a return for such calendar year, in such form as determined by the Secretary, showing the information otherwise required to be furnished with respect to transfers subject to subsection (a).’’.`
   - (B) REPORTING PENALTIES.—Section 6724(d)(1)(B) of such Code is amended by striking ‘‘or’’ at the end of clause (xxv), by striking ‘‘and’’ at the end of clause (xxvi), and by inserting after clause (xxvi) the following new clause: ‘‘(xxvii) section 6045A(d) (relating to returns for certain digital assets),’’.

3. TREATMENT AS CASH FOR PURPOSES OF SECTION 6050I.—Section 6050I(d) of such Code is amended by striking ‘‘and’’ at the end of paragraph (1), by striking the period at the end of paragraph (2) and inserting ‘‘, and’’, and by inserting after paragraph (2) the following new paragraph: ‘‘(3) any digital asset (as defined in section 6045(g)(3)(D)).’’.

#### (c) EFFECTIVE DATE.

The amendments made bythis section shall apply to returns required to be filed, and statements required to be furnished, `after December 31, 2023`.

#### (d) RULE OF CONSTRUCTION.

Nothing in this section or the amendments made by this section shall be construed to create any inference, for any period prior to the effective date of such amendments, with respect to-

1. whether any person is a broker under section 6045(c)(1) of the Internal Revenue Code of 1986, or
2. whether any digital asset is property which is a specified security under section 6045(g)(3)(B) of such Code.

---

### **Analyisis of the Text**

With the bill text in mind, let's take a step back. What are we talking about here? A broker in traditional finance is a company that moves money and financial products around on behalf of accounts. Under U.S. law, these companies tend to be subject to very strict regulation. They handle peoples' money, and the government views it as its mandate to nurture honest and trustworthy financial markets. This stance has been largely successful in developing a rich network of public and private investment opportunities that aare well-regulated and safe - not just for savvy and wealthy investors (overlooking the "accredited investor" paradigm for now), but for regular people too. ETFs, for example, are an innovative risk-management product that give working class Americans diverse exposure to equity that would be impossible to replicate at a small scale. The key long term benefit that regulation brings to this paradigm is trust. Without regulation, brokers could literally abscond with investors' money, invest in different assets than advertised, or engage in any kind of shady activity. Instead, investors trust brokers. Wall Street and Silicon Valley are political entities in their own right and certainly try to influence regulations in their favor. Certainly there are examples of egregious wrongdoing over the decades as well. But fundamentally, people trust their 401k brokers. People trust that mutual funds are executing on their prospectuses. People trust that their checking account balance will be the same in the morning as it is today.

Retrofitting these same regulations to cryptocurrencies does not serve the same purpose. P2P cryptocurrency networks are trustless.

It is simply not possible for a network participant to steal funds in the way that it is with USD. If I give you my credit card details, or my bank account number, you can take my money. Every transaction I make in USD discloses one of those pieces of information to the receiver. Therefore, credit card readers are only issued to known merchants, and only known entities can join the Automated Clearing House (ACH) network. Privileged participants are held to a higher standard of reporting because they have elevated access and potential to do harm. On many p2p networks, there are no privileged participants of any kind. There are only equal participants. Each account has a public and private key, and transactions are generated with that pair in such a way that th private key is never exposed to the counterparty. Thus, a fundamental difference worth noting as a regulator: in USD, the only thing stopping a receiver of funds from lying, stealing, or mismanaging those funds is the law (or their concscience), whereas in cryptocurrency it is impossible to do those things outside of hacking a user's private key.

Let's dig back into some more specific language and detail.

> "any service effectuating transfers of digital assets on behalf of another person"

As I've discussed about the key pairs, it is impossible to move money on behalf of anothr person without their absolute consent. Their consent is the only possible way for the money to move. With that said, this text could be referring to miners, stakers, decentralized finance (defi), or others. Let's look at miners and stakers, and more broadly refer to them as block producers (BPs). BPs collate _signed transations_ into a block and add that block to the "blockchain". A BP cannot arbitrarily move funds around between users (I cannot emphasize that enough). A BP is incentivized to include transactions by a fee, paid by the sender, in a block that it is producing. There is no barrier to entry to be a BP. Bitcoin is the most competitive blockchain to be a BP on, and to mine bitcoin effectively currently takes a lot of capital. Everyone is _allowed_ to participate though. There is no requirement to meet face to face, there is no database that a BP needs to be granted access to before working. There is no way for a new BP to lie to the network, or alter the money supply, or any user's account balance. Thus, a second point for a regulator to consider: everyone can be a block producer, which means that the proposd reporting requirements apply to, on the upper bound, everyone.

There is another interesting use case on the topic of a "service effectuating transfers" which is an automated market maker (AMM) decentralized exchange (DEX). AMM DEXs allow users to swap tokens from A to B or vice versa. The blue chip AMM is Uniswap, which recenlty surpassed \$1b in fees generated. The way an AMM works at a high level is that many users pool their A and their B together, and then whoever wants to swap from A to B deposits A and withdraws B. Prices are set automatically based on the ratio of A to B in the pool. What's very attractive about this model to anyone interested in fairness and equality is that users at any deposit or swap size get the same economies of scale. Rather than going to a single large market maker (say Citadel Capital...) to privide liquidity for an asset trade, users can go to a pool of all of the market makers, and an average joe earns the same percentage returrn on their stake as a massive user. Thus, we have another noteworthy insight - increasingly complex instruments built on blockchains can be risky, certainly, but they can also deemocratize access to opportunities between investors of all wealth levels, whereas in traditional finance, there are many opportunuties that are just impossible to offer to investors below a minimum investment size.

Reviewing, here's the quick rundown on why the bill text is misguided:

1. It is impossible to move funds on behalf of another user on a "cryptographically secured distributed ledger", making the revised broker definition nonsensical from the start
2. Intentionally or otherwise, the scope of the increased reporting requirements that this bill seems to be proposing is everyone. Even individuals that don't own a single cent worth of crypto can produce blocks on a blockchain by running the software - it's free. These reporting requirements, traditionally, are reserved for institutions that are entrusted with the duty of holding, moving, and otherwise managing money on behalf of users, but actually have the capability to steal or mismanage that money without the threat of law enforcement.
3. Applying these rules to decentralized finance applications will have the effect, intentionally or otherwise, of denying opportunies to non-ultra-high-net-worth individuals that this technology enables. High NW individuals can access whatever opportunuites they want traditionally, so access is only denied to "regular people".

### **Alternative Proposals**

A regulator who has given me the benefit of the doubt thus far might now say "well if this bill is not good, but I feel I must protect people from scams and ensure that taxes are being levied on the income and gains being made with this technology, what should I do?". Well, in my opinion, first and foremost is simply invest in enforcement.

Scamming people and tax evasion are illegal. No change to the law is needed to enforce those laws. The SEC has certainly done their job in punishing companies and individuals that have broken the law. Sterling-reputation exchanges like coinbase and gemini continue to do business the right way in the US, while second-rate exchanges like bitmex, bitfinex, and poloniex have left the market. Some crypto enthusiasts will point to this as an example of entrepeneurs and talent leaving the US, but I disagree. If you can't operate above board, then you are not a visionary entrepeneur, you are sketchy, or at worst a true scammer. Exchange hacks in cryptocurrency's past are all the evidence needed that properly regulated exchanges that fit in the mold of traditional finance entities are a great boon to the average crypto user. I don't have any information on how well the IRS has done in extracting actual taxes owed from crypto users. My guess is not very well, so this is an area that Congress could look to for fundraising. US-compliant exchanges keep records of purchases and sales, and apps like koinly or debank make tabulating on-chain activity somewhat easy.

In terms of actual new language in the legal code, I think Congress would do well to learn about the technologies and the entities at play in this space and craft legislation that fits the new model rather than expanding laws that don't make sense in the context. When it comes to losing innovators, that it actually happening, albeit not in the form of sketchy exchanges. Foundtions are being set up in Europe and Asia rather than the US because of regulatory ambiguity. If the US codified the proper, legal way to raise funds to develop a blockchain, we could be retaining innovation capital. Many projects have a non profit foundation that develops the sofware, and others have chosen to found companies to do the same. Some projects have raised funds with traditional venture capital, while others have made their fundraising available to all. The government could be paving the way toward public access to safe and complianct investments like "ICOs" that were popular in 2017 through clear guidlines for these teams doing fundraising.

There are interesting questions to ask about the the intersection of crypto and the real world. Are funds stolen if someone tweets their private key? Is holding your signature in a multi-signature transation hostage illegal, or just bad system design? How many nodes make a blockchain "decentralized"? (e.g. is Libra decentralized?)

In general, I believe this new legislative space should focus on paving the way for innovation here in the US, and empowering teams to build powerful democratic applications, not just in the realm of finance, but across all the digital industries. Where entities operate in the physical world, I think the government should swiftly intervene to stop criminal activity. However, where entities are acting as participants in decentralized protocols, I don't think the government has the ability to effectively accomplish its goals.

A digital world where users are completely empowered to cut out all middlemen (brokers, lawyers, regulators, banks, etc...) is a revolutionary paradigm shift, one with which the government might not be comfortable. My final advice to the regulators is to come to terms with the fact that you can't control a decentralized ledger. You can't censor an uncensorbale record. Legislate the physical world, the on and off ramps, the human disputes, the exchanges and the corporations involved in crypto. Don't attempt to legislate the protocol level. It won't work, and in the process, you'll only lose the faith of your constituents to whom this is an important issue.
