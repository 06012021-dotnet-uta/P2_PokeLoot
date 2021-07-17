﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using P2DbContext.Models;
using BusinessLayer;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace P2Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class P2Controller : Controller
    {
        private readonly ILogger<P2Controller> _logger;

        private readonly IBusinessModel _businessModel;

        /// <summary>
        /// This constructor is only used for testing
        /// </summary>
        /// <param name="rpsGame">Business model object</param>
        //public P2Controller(IBusinessModel businessModel)
        //{
        //    this._businessModel = businessModel;
        //}

        /// <summary>
        /// Constructor to inject the business layer
        /// </summary>
        /// <param name="businessModel">Business model object</param>
        /// <param name="logger">Logger object</param>
        public P2Controller(IBusinessModel businessModel , ILogger<P2Controller> logger)
        {
            this._businessModel = businessModel;
            this._logger = logger;
        }

        /// <summary>
        /// https://localhost:44307/api/P2/DisplayBoard
        /// Return the json object for each post in the database to build the display board
        /// </summary>
        /// <returns>List of Posts</returns>
        [HttpGet("DisplayBoard")]
        public List<Post> PostList()
        {
            List<Post> playerList = _businessModel.getDisplayBoard();
            return playerList;
        }

        /// <summary>
        /// https://localhost:44307/api/P2/Pokemon/2
        /// Returns the json object for a selected Pokemon
        /// </summary>
        /// <param name="id">id to select by</param>
        /// <returns>Pokemon card</returns>
        [HttpGet("Pokemon/{id}")]
        public PokemonCard Pokemon(int id)
        {
            PokemonCard selectedCard = _businessModel.getPokemonById(id);
            return selectedCard;
        }



        /// <summary>
        /// https://localhost:44307/api/P2/Login/mason.sanborn/Revature
        /// Returns the json object for the validated user or null if the user does not exist
        /// </summary>
        /// <param name="username">input username</param>
        /// <param name="password">input password</param>
        /// <returns>User object or null</returns>
        [HttpGet("Login/{username}/{password}")]
        public User Login(string username, string password)
        {
            User currentUser = _businessModel.login(username, password);
            return currentUser;
        }


        //          This method throws error in swagger 
        //          "TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body."
        //[HttpGet("Lootbox/{currentUser}")]
        //public Dictionary<PokemonCard, bool> Get(User currentUser)
        //{
        //    Dictionary<PokemonCard, bool> newCard = _businessModel.rollLootbox(currentUser);
        //    return newCard;
        //}

        /// <summary>
        /// https://localhost:44307/api/P2/Lootbox/2
        /// Gets a random pokemon and adds it the the users collection with the id passed in
        /// </summary>
        /// <param name="userId">user id for user rolling lootbox</param>
        /// <returns>Serialized string of dict containing PokemonCard object of the random choice and shiny boolean</returns>
        [HttpGet("Lootbox/{userId}")]
        //public Dictionary<PokemonCard, bool> Lootbox(int userId)
        public string Lootbox(int userId)
        {
            User currentUser = _businessModel.GetUserById(userId);
            Dictionary<PokemonCard, bool> newCard = _businessModel.rollLootbox(currentUser);
            //string json = JsonConvert.SerializeObject(newCard.ToList(),
            //    new JsonSerializerSettings()
            //    {
            //        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            //    });
            string json = JsonConvert.SerializeObject(newCard.ToList());
            return json;
        }


        /// <summary>
        /// https://localhost:44307/api/P2/UserCollection/2
        /// Gets all the pokemon objects and their quanity in realtion to the input userId
        /// </summary>
        /// <param name="userId">id of desired users collection</param>
        /// <returns>Serialized string of dict containing PokemonCard object and its relation to the users collection for quanities</returns>
        [HttpGet("UserCollection/{userId}")]
        public string UserCollection(int userId)
        {
            User currentUser = _businessModel.GetUserById(userId);
            Dictionary<CardCollection, PokemonCard> userCollection = _businessModel.getUserCollection(currentUser);
            string json = JsonConvert.SerializeObject(userCollection.ToList());
            return json;
        }

        /// <summary>
        /// https://localhost:44307/api/P2/Signup
        /// Gets all the pokemon objects and their quanity in realtion to the input userId
        /// </summary>
        /// <param name="userId">id of desired users collection</param>
        /// <returns>Serialized string of dict containing PokemonCard object and its relation to the users collection for quanities</returns>
        [HttpPost("Signup")]
        public ActionResult Signup(User userObj) 
        {
            bool isCreated = _businessModel.signUp(userObj);
               
            if(isCreated) 
            { 
            return CreatedAtAction("Signup", new { name = userObj.FirstName, ok = true }, new {ok = true, newUser = userObj});
            }

            return BadRequest(new { message="Error User already Exist", status=-1});
        }

        /// <summary>
        /// https://localhost:44307/api/P2/DeleteUser/18
        /// Removes a user from the database.
        /// </summary>
        /// <param name="userId">id of desired users collection</param>
        /// <returns>A status code back to the user</returns>
        [HttpDelete("DeleteUser/{userId:int}")]
        public ActionResult DeleteUser(int userId)
        {
            bool isDeleted;
            try
            {
               isDeleted = _businessModel.RemoveUser(userId);

               if (!isDeleted)
                {
                    return NotFound($"Employee with Id = {userId} not found");
                }

                return Ok();
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting data");
            }
        }



    } // end class
} // end namespace
