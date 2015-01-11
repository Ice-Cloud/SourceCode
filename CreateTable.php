    <div class="container"> 
    <!--Alignement-->
    <div class="col-md-12">
      <!-- Text-->
      <hr class="featurette-divider">
        <?php
          //if(isset($_POST['query'])) //takes value from query input form
            
              $adress = "localhost";
              $user = "root";
              $pass = "root";
              $nameDB  = "wines_project_database_2013_ionut_indre";
      
              $conn = mysql_connect($adress, $user, $pass) or die("Cannot connect to SQL"); // connection to DB
              mysql_select_db($nameDB, $conn) or die("No such database!");
      
              //$query = $_POST['query']; // take query from the input form
              $query = "SELECT  
                        wines.URL_For_Wine_Bottle_Picture,
                        wines.Wine_Name, 
                        grape_varieties.Grape_Varieties_Name,
                        colors.Color_Name,
                        years.Years_Number,
                        countries.Country_Name,
                        regions.Region_Name,
                        wines.Price
                        FROM `wines` 
                        INNER JOIN `colors` ON 
                          colors.Color_Code=wines.Colors_Color_Code
                        INNER JOIN `grape_varieties` ON
                          grape_varieties.Grape_Varieties_Code=wines.Grape_Varieties_Grape_Varieties_Code
                        INNER JOIN `years` ON
                          years.Years_Number=wines.Years_Years_Number
                        INNER JOIN `countries` ON
                          countries.Country_Code=wines.Countries_Country_Code
                        INNER JOIN `regions` ON
                          regions.Region_Code=wines.Regions_Region_Code
                        ORDER BY Wine_ID";
              $result = mysql_query($query);
        ?>

        <table class=" view_table table table-responsive table-hover" >
    
      <tr class="table_header">
        <th></th>
        <th>Name</th>
        <th>Variety</th>
        <th>Color</th>
        <th>Year</th>
        <th>Country</th>
        <th>Region</th>
        <th>Price</th>
      </tr>
    
  <?php
  
    while($rand = mysql_fetch_array($result))
    {
  ?>        
      <tr>
      
    <?php
      //----------
        if(isset($rand['URL_For_Wine_Bottle_Picture']))
        {
    ?>
        <td>
          <a href="<?php echo $rand['URL_For_Wine_Bottle_Picture'];?>"><img src="<?php echo $rand['URL_For_Wine_Bottle_Picture'];?>" class="img-thumbnail" height="80" width="80" alt="bottle"><?php;
      ?>
        </td> 
      <?php
        }
      //----------  
 
      //----------
        if(isset($rand["Wine_Name"]))
        {
        ?>
          <td>
      <?php
          echo $rand['Wine_Name']." ";
      ?>
          </td>
            
        <?php
        }
      //---------
        if(isset($rand['Grape_Varieties_Name']))
        {
        ?>
          <td>
      <?php
          echo $rand["Grape_Varieties_Name"];
        ?>
          </td>
    
      <?php
        }
      //----------
        if(isset($rand['Color_Name']))
        {
          ?>
          <td>
          <?php
            echo $rand["Color_Name"];
          ?>
          </td>
            
          <?php
        }
      //----------
        if(isset($rand['Years_Number']))
        {
          ?>
          <td>
          <?php
            echo $rand["Years_Number"];
          ?>
          </td>
            <?php
        }
      //----------
        if(isset($rand['Country_Name']))
        {
          ?>
          <td>
          <?php
            echo $rand["Country_Name"];
          ?>
          </td>
            <?php
        }
      //----------
        if(isset($rand['Region_Name']))
        {
          ?>
          <td>
          <?php
            echo $rand["Region_Name"];
          ?>
          </td>
            <?php
        }
      //----------
        if(isset($rand['Price']))
        {
          ?>
          <td width="80">
          <?php
            echo $rand["Price"]." $";
          ?>
          </td>
            <?php
        }
      //----------
  
      //----------
          ?>
          </tr>
          <?php
    } 
          ?>
          </table>

            </div>
          <?php
        mysql_free_result($result); 
      
    ?>    
  </div>
    
    </div>
   </div> <!--container-->
