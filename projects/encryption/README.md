
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 6

My Partner's Key: 7

Our initial shared key: 13

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|Pbybtar          | Cologne         | 13  |
|molcP            | Virus           | 20  | 
|sHKXK_OXK_Q[U.   | Where are you   | 15  | 
|hahahhah         | hahahhah        | 0   |
#2 Caesar cipher and reversal
#3 Caeser cipher, binary conversion, binary inversion (all of the 0s in the group of 8 is turned into 1, all of the 1s in the groups of 8 is turned into 0), mod 64 binary, adds 64 to the binary (to prevent low ascii numbers, which gives a lack of visible characters), then conversion back into letters

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
Deoder
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
01000100 01100101 01101111 01100100 01100101 01110010
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Ethan
    Destination: Colin
    Sequence: 1/3
    Data: 01000100 01100101
    =========
    Packet 2:

    Source: Ethan
    Destination: Colin
    Sequence: 2/3 
    Data: 01101111 01100100
    =========
    Packet 3:

    Source: Ethan
    Destination: Colin
    Sequence: 3/3
    Data: 01100101 01110010
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric encryption is decoded using common methods, and can easily be hacked. Asymmetric encryption is decoding using a shared secret, which is uaully a key. Now, hackers can only get to it if they have a shared secret.
- Why is it important that this protocol uses a new key for each message?
So that even if the initial shared secret gets compromised, you have a different one.
- Why is it important that you never share your secret key?
The secret key is the "shared secret", if anyone malicious gets a hold of it, you're going have big problems. One of those problems is the fact that the hacker can now read your messages.
- In the transport layer, do these messages use TCP or UDP? Why?
These messages use TCP because it doesn't need to be shown instantly. We want accuraccy, not just efficiency.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer, the sender generates a routing table to reach the reciever. In the link layer, the message is converted into binary and sent through the routing table.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
The sender, the reciever, the time, and the public key.