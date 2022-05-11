using JordansDevBlog.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace JordansDevBlog.API.Data
{
    public class JordansBlogDbContext : DbContext
    {
        public JordansBlogDbContext(DbContextOptions options) :base(options)
        {

        }

        //DbSet
        public DbSet<Post> Posts { get; set; }
    }
}
