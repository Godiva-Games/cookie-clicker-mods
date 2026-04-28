# Cookie Clicker Mods
Compilation of cookie clicker mods

## CookieLiquidator


### CookieLiquidator - Buy/Sell Rules
#### Conservative
Buys and sells only occur on Fast Rise (mode 3) and Slow Rise (mode 1) when the delta is greater than 0.0.  
Buys on Slow Rise (mode 1) with a positive delta only occur when the goods value is less than the resting value.  

Sells any goods if the mode is no longer Fast Rise (mode 3) or Slow Rise (mode 1).  

#### Default
Buys and sells occur on Fast Rise (mode 3) and Slow Rise (mode 1).  
Buys on Fast Rise (mode 3) occur if the delta is greater than -0.5.  
Buys on Slow Rise (mode 1) occur if the delta is greater than 0.0 and the goods value is less than the resting value plus ten.  

Always sells any goods if the mode is no longer Fast Rise (mode 3) or Slow Rise (mode 1).  
Sells any goods on Slow Rise (mode 1) if the delta is less than 0.0 or the goods value is greater than the resting value plus fifteen.  

#### Aggressive
Buys and sells occur on Fast Rise (mode 3), Slow Rise (mode 1), Chaotic (mode 5), and Slow Fall (mode 2).  
Buys on Fast Rise (mode 3) occur regardless of the delta.  
Buys on Slow Rise (mode 1) occur if the delta is greater than -0.5 and the goods value is less than the resting value plus fifteen.  
Buys on Chaotic (mode 5) occur if the delta is greater than -0.5 and the goods value is less than the half of the resting value.  
Buys on Chaotic (mode 5) occur if the delta is greater than 0.0 and the goods value is between 50% and 75% of the resting value.  
Buys on Chaotic (mode 5) occur if the delta is greater than 0.5 and the goods value is between 75% and 125% of the resting value.  
Buys on Slow Fall (mode 2) occur if the delta is greater than -0.5 and the goods value is less than 25% of the resting value.  

Sells any goods on Fast Fall (mode 4).  
Sells any goods on Slow Fall (mode 2) and the goods value is greater than 25% of the resting value.  
Sells any goods on Chaotic (mode 5) and the delta is less than -0.5.  
Sells any goods on Chaotic (mode 5) and the delta is less than 0.0 if the goods value is equal or greater than 75% of the resting value.  
Sells any goods on Chaotic (mode 5) and the delta is less than -0.5 if the goods value is equal or greater than 50% of the resting value.  
Sells any goods on Slow Rise (mode 1) if the delta is less than 0.5 and the goods value is greater than the resting value plus twenty.  
Sells any goods on Slow Rise (mode 1) if the delta is less than 0.1 and the goods value is greater than the resting value plus ten.  
