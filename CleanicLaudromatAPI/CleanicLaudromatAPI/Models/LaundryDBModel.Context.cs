﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CleanicLaudromatAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LaundryDBModel : DbContext
    {
        public LaundryDBModel()
            : base("name=LaundryDBModel")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<InventoryList> InventoryLists { get; set; }
        public virtual DbSet<Self_service> Self_service { get; set; }
        public virtual DbSet<Table> Tables { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}