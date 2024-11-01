SELECT 
    main.id,
    main.name,
    secondary.name AS parent_name
FROM 
    main_table
LEFT JOIN 
    secondary_table 
ON 
    main.parent_id = secondary.id;