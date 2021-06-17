package com.team.store.controller;


import com.team.store.entity.Cart;
import com.team.store.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class CartController {

    private final CartService cartService;
    @Autowired
    public CartController(@Qualifier("cartServiceIMPL")CartService cartService){
        this.cartService = cartService;
    }

    @GetMapping("/findAllItems")
    public List<Cart> findAll() {return cartService.findAll();}

    @PostMapping("/addItem")
    public Cart addItem(@RequestBody Cart theCart){
        theCart.setId(0);

        cartService.save(theCart);
        return theCart;
    }

    @PutMapping("/updateItem")
    public Cart updateItem(@RequestBody Cart updateItem){
        cartService.save(updateItem);
        return updateItem;
    }

    @DeleteMapping("/deleteItem/{itemId}")
    public String deleteItem(@PathVariable int itemId){
        cartService.deleteById(itemId);
        return "Deleted item : " + itemId;
    }
}
