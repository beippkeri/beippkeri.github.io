# The TCP/IP Model
There are 4 layers. Every packet passes through all four.
## Link (Network Access)
The gateway station, the first router that handles your
computer's packets. 
To send packets, computers ask for their address, and the send address.
Protocols in this layer include:
- Wifi
- Ethernet
- LTE
- Bluetooth
## Internal
The second station, how the router routes your packets.
Once the computer is connected to the router, it gets an IP address, where
then it gets the actual send address.
IP Format: x.x.x.x ({x|0<=x<=255>})
## Transport
Now the packets are transported through IPs to get to its location. The computer doesn't know who they are contacting, so they ask these questions.
"Who are you?"
"Who are your neighbors?"
The computer that gets the packets then the cycle goes on until the packets get to the
target location.
Some packets may be modified or lost in the transfer.
## Application
The target will send a signal to help verify that the transfer was successful, that they got the message.
Protocols in this layer:
HTTP (Hyper Text Transport Protocol)
WSS (WebSocket Secure Protocol)